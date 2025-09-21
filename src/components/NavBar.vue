<template>
        <nav class="bg-gray-900 text-white px-6 py-4 shadow-md">
            <div class="container mx-auto flex justify-between items-center">
                <h1 class="text-xl font-bold">Mark Corsiga</h1>
                <ul class="text space-x-6">
                    <li><RouterLink to="/" class="hover:text-yellow-400">Home</RouterLink></li>
                    <li><RouterLink to="/about" class="hover:text-yellow-400">About</RouterLink></li>
                    <li><RouterLink to="/projects" class="hover:text-yellow-400">Projects</RouterLink></li>
                    <li><RouterLink to="/contact" class="hover:text-yellow-400">Contact</RouterLink></li>
                </ul>
            </div>
        </nav>
</template>

<script>
    import { RouterLink } from 'vue-router'
</script>