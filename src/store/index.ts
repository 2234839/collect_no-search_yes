/** 要被收藏的东西 */
type s = {
  /** 这个是什么类型的 */
  type: string;
  /** 通过这个可以访问到东西的原始位置（统一资源定位符？） */
  source: string;
  /** 快照 ，为了防止原始位置的资源失效 */
  snapshot: string;
};

import level from "level-ts";

const database = new level("collect");
export async function save(p: s) {
  const key = `${"崮生"}:${p.source}`;
  const data = {
    [Date.now()]: p,
  };
  if (await database.exists(key)) {
    await database.merge(key, data);
  } else {
    await database.put(key, data);
  }
}

export async function forEach(f: (p: s) => void) {
  const s = await database.stream({ all: "崮生" });
  s.forEach(({ key, value }) => {
    for (const k in value) {
      if (value.hasOwnProperty(k)) {
        const element = value[k];
        f(element);
      }
    }
  });
}

export async function stream(key: string) {
  return database.stream({ all: key });
}
