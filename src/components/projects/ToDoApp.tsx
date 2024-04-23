

export function TodoApp(){
  return (
<section class="bg-gray-400 dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">To-Do App</h1>
            <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">A React To-Do app efficiently manages your tasks, allowing seamless adding, updating, and completing of items. The different catagories allow for good organization of the users different work out plans. You are able to add and delete at any time, and add any kind of note or summary that might be needed for your routine. Chose a dark mode for this project to give it more of a mature but respected understanding.  </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="/projectAssets/gifs/lab8_TaylorKrall.gif" alt="Description of what the GIF shows" />

        </div>                
    </div>
</section>
  )
}