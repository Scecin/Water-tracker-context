// Your custom hook goes here!
import { useState } from "react";

export const useModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(true)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }


    return {isModalOpen, toggleModal }
}

export const useMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }


    return {isDarkMode, toggleDarkMode }
}