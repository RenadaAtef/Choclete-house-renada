
gsap.to('h1', { x:50,  fill:"yellow", duration: 3})
  gsap.from('.link', {opacity: 0, duration: 3, stagger: .8}) 
 gsap.from('.chocolate', {y: 30, duration: 2, opacity: 0})
  gsap.from('.btn', {y: 20, duration: 3, opacity: 0, delay: 3})
gsap.to('.choco', {x: 30, rotation: 360, duration: 2, delay: 5})
gsap.to('h2', {x: 20, duration: 2.5, rotation: 360, opacity:1, delay: 2}) 
