import {Birds} from '../data'

export const fetchBirdImages = () => {
    return Birds.map((bird) => bird.img)
}