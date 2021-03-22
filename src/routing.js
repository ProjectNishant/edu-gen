// import Dashboard from '@/components/DashBoard/dashboard.vue'
import Home from './components/HomePage/HomePage.vue'
import courseDetails from './components/selectedCourseDetails/courseDetails.vue'
import Trainee from './components/becomeATrainer/becomeATrainer.vue'
import myCourse from './components/myCourse/myCourse.vue'
import search from './components/searchResults/search.vue'
import demoCard from './components/shared/demoCard.vue'
import {store} from './store/store.js'
import HomePage from './components/event/HomePage.vue'
import SearchEvent from './components/event/SearchEvent.vue'
import emailVerification from './components/shared/mailVerificationPage.vue'
import selectedCourse  from './components/shared/ViewSelectedCourse.vue'
import profile from './components/userProfile/userProfile.vue'
import Contact from './components/footerComponents/Contact.vue'
import Support from './components/footerComponents/support.vue'
import Career from './components/footerComponents/Career.vue'
import AboutUs from './components/footerComponents/AboutUs.vue'
import Services from './components/footerComponents/Services.vue'
import BlogView from './components/BlogView.vue'
import learning from './components/learning/learning.vue'
import resetPassword from './components/resetPassword/resetPassword.vue'
import favourites from './components/favourites/favourites.vue'
import useCases from './components/useCases/useCases.vue'
import ourTeam from './components/ourTeam/ourTeam.vue'
import useCaseLanding from './components/useCases/useCaseComponent/ucLanding.vue'
import hackathones from './components/hackathone/hackathone.vue'
import hackathoneDetails from './components/hackathone//hackathoneComponents/hackathoneDetails.vue'
import hackathone from './components/hackathone//hackathoneComponents/hackathone.vue'
import quizes from './components/quizes/quizes.vue'
import quizDetail from './components/quizes/quizDetails.vue'
import tutorial from './components/Tutorials/tutorials.vue'
import projects from './components/Projects/projects.vue'
import interviews from './components/Interviews/interview.vue'




export const routes =[
    {path:'', component:Home,beforeEnter:(to,from,next)=>{
        var val = localStorage.getItem('dataStatsAuthToken')
        if(val){
            next('/dashboard')

        }
        else{
            store.state.isAuthenticated=false;
            next()
        }
    }},
    {path:'/tutorial', component:tutorial,beforeEnter:(to,from,next)=>{
        var val = localStorage.getItem('dataStatsAuthToken')
        if(val){
            next()

        }
        else{
            store.state.isAuthenticated=false;
            next('/')
        }
    }},
      {path:'/interview', component:interviews,beforeEnter:(to,from,next)=>{
        var val = localStorage.getItem('dataStatsAuthToken')
        if(val){
            next()

        }
        else{
            store.state.isAuthenticated=false;
            next('/')
        }
    }},

      {path:'/project', component:projects,beforeEnter:(to,from,next)=>{
        var val = localStorage.getItem('dataStatsAuthToken')
        if(val){
            next()

        }
        else{
            store.state.isAuthenticated=false;
            next('/')
        }
    }},
    {path:'/dashboard',component:()=>import("@/components/DashBoard/dashboard.vue"),beforeEnter:(to,from,next)=>{
        var val = localStorage.getItem('dataStatsAuthToken')
        // alert('jgfgx '+$store);
        if(val){
            next();
            store.state.isAuthenticated=true;
        }
        else{
            next('/');
        }
    }},
    {path:'/email_verification',component:emailVerification},
    {path:'/profile',component:profile,beforeEnter:(to,from,next)=>{
        var val = localStorage.getItem('dataStatsAuthToken')
        // alert('jgfgx '+$store);
        if(val){
            next();
            store.state.isAuthenticated=true;
        }
        else{
            next('/');
        }
    }},
    {path:'/passwordReset/:data',component:resetPassword},
    {path:'/courseDetails/:id',component:courseDetails},
    {path:'/sendToTrainer', component: Trainee},
    {path:'/my-course',component:myCourse},
    {path:'/find/:value',component:search},
    {path:'/demoCard',component:demoCard},
    {path: "/event",component: HomePage},
    {path: "/searchedValue/:enteredValue",component: SearchEvent,name: "SearchEvent"},
    {path: "/myfavourites",component: favourites},
    {path: "/ourteam",component: ourTeam},
    {path: "/support",component: Support},
    {path: "/techQuiz",component: quizes},
    {path: "/quizDetails/:no",component: quizDetail},



    // footer routing

    {path:"/contactUs", component:Contact},
    {path:"/careers", component:Career},
    {path:"/aboutUs", component:AboutUs},
    {path:"/services", component:Services},

    {path:"/blogs", component:BlogView},

    {path:'/learning/:id',component:learning},



    // Usecases routes
    {path:'/useCases',component:useCases,
        children:[
            {path:'/',component:useCaseLanding}
        ]

        },

    {path:'/hackathone',component:hackathones,
        children:[
            {path:"/",component:hackathoneDetails},
            {path:":name", component:hackathone}
        ]
    },




       {path:'/viewDetails/:name',component:selectedCourse,
        children:[
            {path:"/",component:hackathoneDetails},
            {path:":name", component:hackathone}
        ]
    },



]