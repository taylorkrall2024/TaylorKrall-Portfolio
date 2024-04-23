

export function QuizApp(){
  return (
<section class="bg-white dark:bg-zinc-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Quiz App</h1>
            <p class="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">This React Native quiz app provides a straightforward interface for testing your knowledge. Simple navigation and clear answer choices make for a user-friendly experience. The diferent colors of red and green show the user exactly what is correct and incorrect. The different type of questions are clear when going to pick your response. When creating the new questions, you pick and choose what is correct or incorrect so when the user picks the wrong answer they lose points.  </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <div class="gif-container">
        <div>
    <img src="/projectAssets/gifs/lab9_TaylorKrall.gif" alt="Lab 9 Gif" />
</div>
</div>

        </div>                
    </div>
</section>
  )
}