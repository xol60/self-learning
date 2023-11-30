export function getKeyTemplate({ pageNumber, categoryId }: IQueryCategory): string {
    return `/template/get?pageNumber=${pageNumber}&categoryId=${categoryId}`
}