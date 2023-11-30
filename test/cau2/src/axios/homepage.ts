import axios from './axios'


export async function getRoles(name: string) {
    const response = await axios.get<IRole[]>(name);
    return response.data
}
export async function getCategories(name: string) {
    const response = await axios.get<ICategory[]>(name)
    return response.data
}
export async function getJobs(name: string) {
    const response = await axios.get<IJob[]>(name);
    return response.data
}
export async function getTemplates(name: string) {
    const response = await axios.get<IResponseTemplate>(name);
    return response.data
}