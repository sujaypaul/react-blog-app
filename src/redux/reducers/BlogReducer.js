const initialState = [
    {
        id: 0,
        title: "Artificial intelligence",
        image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg",
        category: "Technology",
        likeStatus: 0,
        content: "All but the simplest human behaviour is ascribed to intelligence, while even the most complicated insect behaviour is never taken as an indication of intelligence. What is the difference? Consider the behaviour of the digger wasp, Sphex ichneumoneus. When the female wasp returns to her burrow with food, she first deposits it on the threshold, checks for intruders inside her burrow, and only then, if the coast is clear, carries her food inside. The real nature of the wasp's instinctual behaviour is revealed if the food is moved a few inches away from the entrance to her burrow while she is inside: on emerging, she will repeat the whole procedure as often as the food is displaced. Intelligence—conspicuously absent in the case of Sphex—must include the ability to adapt to new circumstances.",
    },
    {
        id: 1,
        title: "Music Therapy",
        image: "https://www.tonara.com/wp-content/uploads/2021/05/Benefits-of-Music-Therapy.jpg",
        category: "Music",
        likeStatus: 1,
        content: "Music therapy is a broad field. Music therapists use music-based experiences to address client needs in one or more domains of human functioning: cognitive, academic, emotional/psychological; behavioral; communication; social; physiological (sensory, motor, pain, neurological and other physical systems), spiritual, aesthetics.[2][3][4] Music experiences are strategically designed to utilize the elements of music for therapeutic effects, including melody, harmony, key, mode, meter, rhythm, pitch/range, duration, timbre, form, texture, and instrumentation. Some common music therapy practices include developmental work (communication, motor skills, etc.) with individuals with special needs, songwriting and listening in reminiscence, orientation work with the elderly, processing and relaxation work, and rhythmic entrainment for physical rehabilitation in stroke survivors. Music therapy is used in medical hospitals, cancer centers, schools, alcohol and drug recovery programs, psychiatric hospitals, nursing homes, and correctional facilities.",
    }

];

const BlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BLOG":
            state = [...state, action.payload];
        /* falls through */

        case "UPDATE_BLOG":
            const updateState = state.map(blog => blog.id === action.payload.id ? action.payload : blog);
            state = updateState;
            return state;
        /* falls through */

        case "DELETE_BLOG":
            const filterblogs = state.filter(blog => blog.id !== action.payload && blog);
            state = filterblogs;
            return state;
        /* falls through */

        default:
            return state;
    }
};

export default BlogReducer;