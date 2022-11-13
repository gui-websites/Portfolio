export async function load<T>(path: string): Promise<T | null> {
  return queryContent("/" + path)
    .findOne()
    .then((doc: any) => {
      // console.log("doc", doc);
      const data: T = doc;
      return data;
    })
    .catch(() => {
      console.log("Error loading " + path);
      return null;
    });
}
