import { BookContainer } from "./";
import { BookContainerProps } from "./BookContainer";

const data: BookContainerProps = {
  user: {
    uuid: "123e4567-e89b-12d3-a456-426614174000",
    name: "Lorem Ipsum",
    avatarUrl: "https://link-para-avatar.com/lorem.jpg",
  },
  book: {
    uuid: "123e4567-e89b-12d3-a456-426614174001",
    title: "Engenharia de Software",
    author: "Ian Sommerville",
    edition: "9ª edição",
    pagesTotal: 567,
    coverUrl:
      "https://m.media-amazon.com/images/I/51VfUW8vWJL._AC_UF1000,1000_QL80_.jpg",
    rating: 4.5,
    reviewsCount: 1685,
    readersCount: 3486,
    publisher: "Pearson Universidades",
    year: 2011,
    synopsis:
      "Engenharia de Software, de Ian Sommerville, é um guia abrangente para os princípios e práticas do desenvolvimento de software. O livro cobre desde a especificação de requisitos até metodologias ágeis, testes e manutenção de sistemas. Com exemplos práticos e discussões teóricas, é uma referência essencial tanto para estudantes quanto para profissionais da área, oferecendo uma visão atualizada sobre as melhores práticas para a criação de software confiável e eficiente.",
  },
  progress: {
    percentage: 63,
    pagesRead: 357,
    lastUpdated: "2024-07-17T00:00:00Z",
    startDate: "2024-07-17",
    goalDate: "2024-12-13",
  },
  comment: {
    uuid: "123e4567-e89b-12d3-a456-426614174002",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna...",
    createdAt: "2024-06-16T12:30:00Z",
    likes: 4,
    userProgress: 35,
  },
  readingDetails: {
    description:
      "Engenharia de Software, de Ian Sommerville, é um guia abrangente para os princípios e práticas do desenvolvimento de software...",
    createdAt: "2024-06-16T12:30:00Z",
  },
};

export function BookPage() {
  return (
    <div>
      <BookContainer {...data} />
    </div>
  );
}
