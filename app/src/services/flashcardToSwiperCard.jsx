import { SwiperCard } from "../components/models/swiperCard/swiperCard";

export const flashcardToSwiperCard = (flashcards, choices, mode) => {
    return flashcards
        .filter((flashcard) => flashcard && flashcard.category && flashcard.term && flashcard.def) // Filter invalid cards
        .map((flashcard, id) => (
            <SwiperCard
                key={id}
                flashCard={flashcard}
                choices={choices}
                mode={mode}
            />
        ));
};
