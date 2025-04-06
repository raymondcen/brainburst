import { SwiperCard } from "../components/models/swiperCard/swiperCard";

export const flashcardToSwiperCard = (flashcards, choices, mode) => {
    return flashcards.map((flashcard, id) => (
        <SwiperCard
            key={id}
            flashcard={flashcard}
            choices={choices}
            mode={mode}
        />
    ));
};
