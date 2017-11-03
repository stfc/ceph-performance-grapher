import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SummaryPage from '@/components/SummaryPage'
import ComparisonPage from '@/components/ComparisonPage'
import CosbenchSummary from '@/components/CosbenchSummary'
import DDSummary from '@/components/DDSummary'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'root',
            component: SummaryPage
        },

        {   // rename to test summary
            path: '/test_summary',
            name: 'test_summary_page',
            component: SummaryPage  
        },

        {   // rename to cosbench summary
            path:'/cosbench_summary',
            name: 'cosbench_summary_page',
            component: CosbenchSummary
        },

        {
            path: '/dd_summary',
            name: 'dd_summary_page',
            component: DDSummary
        }
       
    ]
})
