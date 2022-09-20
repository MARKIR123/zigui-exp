/**
 * 获取本地图
 * @param name // 文件名 如 doc.png
 * @returns {*|string}
 */
function getAssetsImages(name: string) {
  return new URL(`../imgs/${name}`, import.meta.url).href;
}

export { getAssetsImages }