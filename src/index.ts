import { BorderBox1 } from './components/border-box-1';
import { BorderBox10 } from './components/border-box-10';
import { BorderBox11 } from './components/border-box-11';
import { BorderBox12 } from './components/border-box-12';
import { BorderBox13 } from './components/border-box-13';
import { BorderBox2 } from './components/border-box-2';
import { BorderBox3 } from './components/border-box-3';
import { BorderBox4 } from './components/border-box-4';
import { BorderBox5 } from './components/border-box-5';
import { BorderBox6 } from './components/border-box-6';
import { BorderBox7 } from './components/border-box-7';
import { BorderBox8 } from './components/border-box-8';
import { BorderBox9 } from './components/border-box-9';
import { Decoration1 } from './components/decoration-1';
import { Decoration2 } from './components/decoration-2';
import { Decoration3 } from './components/decoration-3';
import { Decoration4 } from './components/decoration-4';
import { Decoration5 } from './components/decoration-5';
import { Decoration6 } from './components/decoration-6';
import { Decoration7 } from './components/decoration-7';
import { Decoration8 } from './components/decoration-8';
import { Loading } from './components/loading';
import { setClassNamePrefix } from './utils/styled';

import type { App } from 'vue';

// eslint-disable-next-line no-restricted-syntax
export default function DataV(app: App, { classNamePrefix }: { classNamePrefix?: string } = {}) {
  const DataVComponents = [
    BorderBox1,
    BorderBox10,
    BorderBox11,
    BorderBox12,
    BorderBox13,
    BorderBox2,
    BorderBox3,
    BorderBox4,
    BorderBox5,
    BorderBox6,
    BorderBox7,
    BorderBox8,
    BorderBox9,
    Decoration1,
    Decoration2,
    Decoration3,
    Decoration4,
    Decoration5,
    Decoration6,
    Decoration7,
    Decoration8,
    Loading,
  ];

  DataVComponents.forEach((CMP) => app.component(CMP.name, CMP));

  if (classNamePrefix) {
    setClassNamePrefix(classNamePrefix);
  }
}

export { setClassNamePrefix } from './utils/styled';
export * from './components/border-box-1';
export * from './components/border-box-2';
export * from './components/border-box-3';
export * from './components/border-box-4';
export * from './components/border-box-5';
export * from './components/border-box-6';
export * from './components/border-box-7';
export * from './components/border-box-8';
export * from './components/border-box-9';
export * from './components/border-box-10';
export * from './components/border-box-11';
export * from './components/border-box-12';
export * from './components/border-box-13';
export * from './components/decoration-1';
export * from './components/decoration-2';
export * from './components/decoration-3';
export * from './components/decoration-4';
export * from './components/decoration-5';
export * from './components/decoration-6';
export * from './components/decoration-7';
export * from './components/decoration-8';
export * from './components/decoration-9';
export * from './components/decoration-10';
export * from './components/decoration-11';
export * from './components/decoration-12';
export * from './components/loading';
