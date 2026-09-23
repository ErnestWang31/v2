const preview = document.querySelector(".cursor-preview")
const previewImage = preview?.querySelector("img")
const projects = document.querySelectorAll("[data-preview]")

if (preview && previewImage && matchMedia("(hover: hover) and (pointer: fine)").matches) {
  const size = 88
  const gap = 18
  let pointerX = 0
  let pointerY = 0
  let frame

  const movePreview = () => {
    const x = Math.min(pointerX + gap, innerWidth - size - gap)
    const y = Math.min(pointerY + gap, innerHeight - size - gap)
    preview.style.translate = `${Math.max(gap, x)}px ${Math.max(gap, y)}px`
    frame = undefined
  }

  document.addEventListener("pointermove", (event) => {
    pointerX = event.clientX
    pointerY = event.clientY
    if (!frame) frame = requestAnimationFrame(movePreview)
  })

  projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
      previewImage.src = project.dataset.preview
      preview.classList.add("visible")
    })

    project.addEventListener("mouseleave", () => preview.classList.remove("visible"))
  })
}
