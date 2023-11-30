'use client'
import '@/styles/globals.css'
import styles from '@/styles/homepage.module.css'
import SearchBox from '@/components/homepage.search'
import TemplateList from '@/components/homepage.templates'
import JobList from '@/components/homepage.jobs'
import Pagination from '@/components/homepage.pagination'
import useSWRImmutable from 'swr/immutable'
import useSWR from 'swr'
import * as homeActions from '@/axios/homepage'
import loading from '@/public/Winter.gif'
import { useEffect, useState } from 'react'
import { getKeyTemplate } from '@/utils/homepage'
export default function Home() {
  const [selected, setSelected] = useState<number>(1)
  const [categoryId, setCategoryId] = useState<string>('')
  const { data: dataRoles } = useSWRImmutable('/role/get', homeActions.getRoles)
  const { data: dataCategories } = useSWRImmutable('/category/get', homeActions.getCategories)
  const { data: dataJobs } = useSWR('/job/get', homeActions.getJobs)
  const { data: dataTemplates } = useSWR(getKeyTemplate({ pageNumber: selected, categoryId: categoryId }), homeActions.getTemplates)
  if (!dataRoles || !dataCategories || !dataJobs || !dataTemplates) return (
    <div className={styles.loading}>
      Loading....
      <img src={loading.src} />
    </div>)
  console.log(selected)

  return (
    <main >
      <div className={styles.content}>
        <SearchBox roles={dataRoles} categories={dataCategories} setCategoryId={setCategoryId} setSelected={setSelected} categoryId={categoryId} />
        <nav className={[styles['container-title'], styles['body-container']].join(" ")}>
          <TemplateList templates={dataTemplates?.data} />
          <Pagination total={+dataTemplates.count} selected={selected} setSelected={setSelected} />
          <JobList jobs={dataJobs} />
        </nav>
      </div>
    </main>
  )
}
