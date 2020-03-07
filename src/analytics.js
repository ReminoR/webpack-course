function createAnalytics() {
    let counter = 0
    let destroyed = false

    const listener = () => counter++

    document.addEventListener('click', listener)

    return {
        getClicks() {
            return ('Количество кликов = ${counter}')
        }
    }
}

window.analytics = createAnalytics()