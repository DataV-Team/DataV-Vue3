import path from 'path';

import less from 'less';
import { Project, SyntaxKind } from 'ts-morph';

import { ROOT_DIR } from '../config';

import type { NoSubstitutionTemplateLiteral } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: path.resolve(ROOT_DIR, './tsconfig.json'),
});

const fileMap = new Map();

/**
 * @param {string} styledPlaceholder
 * @example compileStyledComponentsPlugin('.__STYLED__')
 */
export function compileStyledComponentsPlugin(styledPlaceholder: string) {
  return {
    name: 'compileStyledComponentsPlugin',

    async transform(content, id) {
      if (!/tsx$/.test(id)) {
        return;
      }

      const source = project.getSourceFile(id);

      if (fileMap.has(id) && fileMap.get(id) !== content) {
        source.refreshFromFileSystemSync();
      }
      fileMap.set(id, content);

      const needTransformNode: NoSubstitutionTemplateLiteral[] = [];

      source.forEachDescendant((node) => {
        if (!node.isKind(SyntaxKind.NoSubstitutionTemplateLiteral)) {
          return;
        }

        const isStyledTemplate = node.getParentIf((parent) =>
          parent.getChildAtIndex(0).getFullText().trim().startsWith('styled')
        );
        if (!isStyledTemplate) {
          return;
        }

        needTransformNode.push(node);
      });

      if (!needTransformNode.length) {
        return;
      }

      await Promise.all(
        needTransformNode.map(async (node) => {
          const lessString = node.getFullText().trim().replaceAll('`', '');

          const prefix = `${styledPlaceholder} {`;

          const lessInput = `${prefix}${lessString}}`;

          const cssOutput = (await less.render(lessInput)).css.trim();
          const cssString = cssOutput.slice(prefix.length, cssOutput.length - 1);

          node.replaceWithText(`\`${cssString}\``);
        })
      );

      return {
        code: source.getFullText(),
        map: null,
      };
    },
  };
}
