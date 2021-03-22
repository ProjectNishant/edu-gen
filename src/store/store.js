import vue from 'vue'
import Vuex from 'vuex';

vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        courseApi:{
            getUserProfile:'https://boiling-garden-13643.herokuapp.com/posts/getUserProfile',
            updateUserProfile:'https://boiling-garden-13643.herokuapp.com/posts/userProfileUpdate',
            getCourses:'https://boiling-garden-13643.herokuapp.com/course/courseDetailsNew',
            getCourseDetails:'https://boiling-garden-13643.herokuapp.com/course/courseDescription/',
            getTestimonial:'https://boiling-garden-13643.herokuapp.com/usecase/getTestimonial',
            getEnrolledCourses:'https://boiling-garden-13643.herokuapp.com/posts/getEnrollCourse',
            becomeTrainee:'https://boiling-garden-13643.herokuapp.com/course/courseRegistration',
            registerUser:'https://boiling-garden-13643.herokuapp.com/posts/userRegistration',
            loginUser:'https://boiling-garden-13643.herokuapp.com/posts/userLogin',
            autoCompleteSearch:'https://boiling-garden-13643.herokuapp.com/course/autocomplete?search=',
            completeSearch:'https://boiling-garden-13643.herokuapp.com/course/getcourseDetail?search=',
            bookFreeDemo:'https://boiling-garden-13643.herokuapp.com/posts/userDemo/',
            getEventInfo:'https://boiling-garden-13643.herokuapp.com/usecase/getEvents',
            askQuestion:'https://boiling-garden-13643.herokuapp.com/question/submitQuestion/5eb8ffbfdfef9b307dcb5efc',
            reqNewPassword:'https://boiling-garden-13643.herokuapp.com/posts/passwordResetRequest',
            resetPassword:'https://boiling-garden-13643.herokuapp.com/posts/passwordReset',
            getHackathone:'https://boiling-garden-13643.herokuapp.com/usecase/getHackathon',
            enrollForHackathone:'https://boiling-garden-13643.herokuapp.com/usecase/enrollHackathon/5facf34acdbfda4affc3d3c2',
            getQuizes:'https://boiling-garden-13643.herokuapp.com/usecase/getUserQuizzes',
            submitQuiz:'https://boiling-garden-13643.herokuapp.com/usecase/enrollQuiz',
            getTutorials:'https://boiling-garden-13643.herokuapp.com/usecase/getUserTutorials',
            getProjects:'https://boiling-garden-13643.herokuapp.com/usecase/getUserProjects',
            getInterviews:'https://boiling-garden-13643.herokuapp.com/usecase/getUserInterview',
            getQuizStatus:'https://boiling-garden-13643.herokuapp.com/usecase/getQuizStatus'



        },

        useCasesApi:{
            getUsecases:'https://boiling-garden-13643.herokuapp.com/usecase'
        },
        userDetails:null,
        courseDetails:null,
        traineeDetails:null,
        searchResults:null,
        quizDetails:null,
        isAuthenticated:false,
        enrolledCourse:null,
        userName:null,

        userData:{
            fullName:null,
            mobNo:null,
            address:null,
            skills:null,
            college:null,
            country:null,
            email:null
        }

    }
});