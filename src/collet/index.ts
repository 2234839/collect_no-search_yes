import { save } from "../store";

/** 要被收藏的东西 */
type s = {
  /** 这个是什么类型的 */
  type: string;
  /** 通过这个可以访问到东西的原始位置（统一资源定位符？） */
  source: string;
  /** 快照 ，为了防止原始位置的资源失效 */
  snapshot: string;
};

/** 接收要被收藏的东西  并且调用保存 */
export function collect(p: s) {
  save(p);
}
