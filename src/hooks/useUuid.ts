import { uniqueId } from 'lodash-es';
import { reactive, readonly } from 'vue';

export function useUuid() {
  return readonly(reactive({ id: uniqueId('datav_uuid') }));
}
