document.addEventListener('DOMContentLoaded', () => {
    const recipeList = document.getElementById('recipe-list');
    const searchInput = document.getElementById('search');

    // Mock recipe data with images
    const recipes = [
        { id: 1, title: "Classic Spaghetti", likes: 0, comments: [], image: "https://via.placeholder.com/250x150?text=Spaghetti" },
        { id: 2, title: "Margherita Pizza", likes: 0, comments: [], image: "https://via.placeholder.com/250x150?text=Pizza" },
        { id: 3, title: "Homemade Burger", likes: 0, comments: [], image: "https://via.placeholder.com/250x150?text=Burger" },
    ];

    // Render recipes function
    const renderRecipes = (data) => {
        recipeList.innerHTML = "";
        data.forEach(recipe => {
            const card = document.createElement('div');
            card.classList.add('recipe-card');
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="card-content">
                    <h3>${recipe.title}</h3>
                    <button class="like-btn">❤️ ${recipe.likes}</button>
                    <textarea placeholder="Add a comment..."></textarea>
                    <button class="comment-btn">Comment</button>
                </div>
            `;
            recipeList.appendChild(card);

            // Like button functionality
            card.querySelector('.like-btn').addEventListener('click', () => {
                recipe.likes += 1;
                renderRecipes(data);
            });

            // Comment button functionality
            card.querySelector('.comment-btn').addEventListener('click', () => {
                const comment = card.querySelector('textarea').value;
                if (comment) {
                    recipe.comments.push(comment);
                    alert('Comment added!');
                    card.querySelector('textarea').value = ""; // Clear input
                }
            });
        });
    };

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const filteredRecipes = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        renderRecipes(filteredRecipes);
    });

    // Initial render
    renderRecipes(recipes);
});
