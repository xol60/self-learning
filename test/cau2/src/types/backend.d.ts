interface IRole {
    _id: string,
    title: string
}
interface ICategory {
    _id: string,
    title: string,
}
interface ITemplate {
    _id: string,
    image: string
    title: string,
    category: string,
    role: string
}
interface IJob {
    _id: string,
    title: string,
    logo: string,
    domain: string
}
interface IResponseTemplate {
    count: number,
    data: ITemplate[]
}