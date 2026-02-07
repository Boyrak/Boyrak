document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const restartBtn = document.getElementById('restart-btn');
    const configSection = document.querySelector('.config-section');
    const outputSection = document.getElementById('output-section');
    const scenesContainer = document.getElementById('scenes-container');
    const themeInput = document.getElementById('story-theme');
    const sceneCountInput = document.getElementById('scene-count');
    const toast = document.getElementById('toast');

    const videoStyles = [
        "Cinematic, 4k, ultra-realistic, highly detailed, dramatic lighting, depth of field",
        "Studio Ghibli style anime, lush backgrounds, expressive character animation, soft lighting",
        "Cyberpunk aesthetic, neon glows, rainy atmosphere, futuristic urban setting, high contrast",
        "Epic fantasy, mystical atmosphere, volumetric fog, ethereal lighting, grand scale"
    ];

    generateBtn.addEventListener('click', () => {
        const theme = themeInput.value.trim();
        const count = parseInt(sceneCountInput.value);

        if (!theme) {
            alert('សូមបញ្ចូលប្រធានបទសាច់រឿងសិន! (Please enter a story theme)');
            return;
        }

        generateBtn.disabled = true;
        generateBtn.textContent = 'កំពុងបង្កើត... (Generating)';

        // Simulate a delay for "AI Generation" feel
        setTimeout(() => {
            const scenes = generateStoryPrompts(theme, count);
            renderScenes(scenes);
            
            configSection.classList.add('hidden');
            outputSection.classList.remove('hidden');
            
            generateBtn.disabled = false;
            generateBtn.textContent = 'បង្កើតសាច់រឿង (Generate)';
        }, 1500);
    });

    restartBtn.addEventListener('click', () => {
        configSection.classList.remove('hidden');
        outputSection.classList.add('hidden');
        scenesContainer.innerHTML = '';
    });

    function generateStoryPrompts(theme, count) {
        const scenes = [];
        const baseStyle = videoStyles[0]; // Default cinematic
        
        for (let i = 1; i <= count; i++) {
            let prompt = "";
            let continuity = "";

            if (i === 1) {
                prompt = `Wide establishing shot: ${theme}. Begin the sequence showing the main subject in a high-detail environment. ${baseStyle}. --duration 8s`;
                continuity = "Establishing the initial setting and character presence.";
            } else {
                const prevContext = `Following the previous scene where we saw ${theme.substring(0, 30)}...`;
                
                if (i % 2 === 0) {
                    prompt = `Medium close-up: Continuing from previous action. The subject reacts to the environment. Persistent character features and consistent lighting. ${baseStyle}. --duration 8s`;
                    continuity = `Maintains visual consistency from Scene ${i-1}. Focuses on character reaction.`;
                } else {
                    prompt = `Dynamic action shot: The story progresses. Detailed movement, high frame rate feel, seamless transition from Scene ${i-1}. ${baseStyle}. --duration 8s`;
                    continuity = `Connects movement from Scene ${i-1} to a new progression.`;
                }
            }

            scenes.push({
                number: i,
                prompt: prompt,
                continuity: continuity,
                duration: "8s"
            });
        }
        return scenes;
    }

    function renderScenes(scenes) {
        scenesContainer.innerHTML = '';
        scenes.forEach(scene => {
            const card = document.createElement('div');
            card.className = 'scene-card';
            card.innerHTML = `
                <div class="scene-badge">Scene ${scene.number}</div>
                <div class="duration-tag">Duration: ${scene.duration}</div>
                <div class="prompt-content">
                    <p class="continuity-notice">${scene.continuity}</p>
                    <div class="prompt-text" id="prompt-${scene.number}">${scene.prompt}</div>
                    <button class="copy-btn" onclick="copyPrompt('prompt-${scene.number}')">Copy Prompt</button>
                </div>
            `;
            scenesContainer.appendChild(card);
        });
    }

    window.copyPrompt = (id) => {
        const text = document.getElementById(id).innerText;
        navigator.clipboard.writeText(text).then(() => {
            showToast();
        });
    };

    function showToast() {
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 2000);
    }
});
