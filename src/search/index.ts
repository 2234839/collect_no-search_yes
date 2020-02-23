/** 要被收藏的东西 */
type s = {
  /** 这个是什么类型的 */
  type: string;
  /** 通过这个可以访问到东西的原始位置（统一资源定位符？） */
  source: string;
  /** 快照 ，为了防止原始位置的资源失效 */
  snapshot: string;
};

import FlexSearch from "flexsearch";
import { forEach, stream } from "../store";
const index = FlexSearch.create({
  encode: "balance",
  tokenize: "forward",
  threshold: 0,
  async: false,
  worker: false,
  cache: false,
});

const path: string[] = [];

forEach((p) => {
  index.add(path.push(p.source), p.snapshot);
});

export async function search(params: string) {
  const i = <number[]>await index.search(params);

  const res: Promise<s>[] = [];

  await Promise.all(
    i.map(async (item) => {
      const s = await stream(path[item]);
      for (let i = 0; i < s.length; i++) {
        const element = s[i];
        res.push(element.value);
      }
    }),
  );
  console.log(await res);
}
