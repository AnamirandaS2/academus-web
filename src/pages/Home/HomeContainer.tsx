import { useQuery } from "@tanstack/react-query";
import Comment, { CommentProps } from "../../components/Comment/Comment";
import Phrase from "../../components/Phrase/Phrase";
import { phraseService } from "../../useCases/phraseService";
import { Phrase as PhraseType } from "../../entities/Phrase.entity";
import Skeleton from "../../components/Skeleton/Skeleton";

const dataC: CommentProps[] = [
  {
    user: {
      uuid: "123e4567-e89b-12d3-a456-426614174000",
      name: "Alice Lima",
      avatarUrl: "https://avatars.githubusercontent.com/u/128877022?v=4",
    },
    book: {
      uuid: "123e4567-e89b-12d3-a456-426614174001",
      title: "Entendendo Algoritmos",
      coverUrl:
        "https://books.google.com.br/books/publisher/content?id=HWewDgAAQBAJ&hl=pt-BR&pg=PA4&img=1&zoom=3&bul=1&sig=ACfU3U2GsF3RfSav8pFSCLcT9HKa7Lbknw&w=1280",
    },
    progress: {
      percentage: 45,
      lastUpdated: "2024-06-16T12:30:00Z",
    },
    comment: {
      uuid: "123e4567-e89b-12d3-a456-426614174002",
      content:
        "O livro é excelente, me ajudou muito a entender os conceitos de algoritmos!",
      createdAt: "2024-06-16T12:30:00Z",
    },
    likes: {
      count: 8,
      usersWhoLiked: [
        {
          uuid: "user-1",
          name: "User One",
        },
        {
          uuid: "user-2",
          name: "User Two",
        },
      ],
    },
    readingDetails: {
      description:
        "O livro Entendendo Algoritmos apresenta uma abordagem agradável para esse tópico essencial da ciência da computação. Nele, você aprenderá como aplicar algoritmos comuns nos problemas de programação enfrentados diariamente. Você começará com tarefas básicas como a ordenação e a pesquisa. Com a prática, você enfrentará problemas mais complexos, como a compressão de dados e a inteligência artificial. ",
      createdAt: "2024-06-16T12:30:00Z",
    },
  },
  {
    user: {
      uuid: "123e4567-e89b-12d3-a456-426614174003",
      name: "Carlos Costa",
      avatarUrl: "https://avatars.githubusercontent.com/u/128877022?v=4",
    },
    book: {
      uuid: "123e4567-e89b-12d3-a456-426614174004",
      title: "Entendendo Algoritmos",
      coverUrl:
        "https://books.google.com.br/books/publisher/content?id=HWewDgAAQBAJ&hl=pt-BR&pg=PA4&img=1&zoom=3&bul=1&sig=ACfU3U2GsF3RfSav8pFSCLcT9HKa7Lbknw&w=1280",
    },
    progress: {
      percentage: 25,
      lastUpdated: "2024-06-17T10:00:00Z",
    },
    comment: {
      uuid: "123e4567-e89b-12d3-a456-426614174005",
      content:
        "Boa leitura, porém alguns tópicos são bem difíceis de entender.",
      createdAt: "2024-06-17T10:00:00Z",
    },
    likes: {
      count: 15,
      usersWhoLiked: [
        {
          uuid: "user-3",
          name: "User Three",
        },
        {
          uuid: "user-4",
          name: "User Four",
        },
      ],
    },
    readingDetails: {
      description:
        "Com a prática, você enfrentará problemas mais complexos, como a compressão de dados e a inteligência artificial.",
      createdAt: "2024-06-17T10:00:00Z",
    },
  },
  {
    user: {
      uuid: "123e4567-e89b-12d3-a456-426614174006",
      name: "Bruna Oliveira",
      avatarUrl: "https://avatars.githubusercontent.com/u/128877022?v=4",
    },
    book: {
      uuid: "123e4567-e89b-12d3-a456-426614174007",
      title: "Entendendo Algoritmos",
      coverUrl:
        "https://books.google.com.br/books/publisher/content?id=HWewDgAAQBAJ&hl=pt-BR&pg=PA4&img=1&zoom=3&bul=1&sig=ACfU3U2GsF3RfSav8pFSCLcT9HKa7Lbknw&w=1280",
    },
    progress: {
      percentage: 60,
      lastUpdated: "2024-06-17T11:00:00Z",
    },
    comment: {
      uuid: "123e4567-e89b-12d3-a456-426614174008",
      content:
        "O conteúdo é bem explicado, mas eu gostaria de mais exemplos práticos.",
      createdAt: "2024-06-17T11:00:00Z",
    },
    likes: {
      count: 20,
      usersWhoLiked: [
        {
          uuid: "user-5",
          name: "User Five",
        },
        {
          uuid: "user-6",
          name: "User Six",
        },
      ],
    },
    readingDetails: {
      description:
        "Nele, você aprenderá como aplicar algoritmos comuns nos problemas de programação enfrentados diariamente.",
      createdAt: "2024-06-17T11:00:00Z",
    },
  },
  {
    user: {
      uuid: "123e4567-e89b-12d3-a456-426614174009",
      name: "Daniel Souza",
      avatarUrl: "https://avatars.githubusercontent.com/u/128877022?v=4",
    },
    book: {
      uuid: "123e4567-e89b-12d3-a456-426614174010",
      title: "Entendendo Algoritmos",
      coverUrl:
        "https://books.google.com.br/books/publisher/content?id=HWewDgAAQBAJ&hl=pt-BR&pg=PA4&img=1&zoom=3&bul=1&sig=ACfU3U2GsF3RfSav8pFSCLcT9HKa7Lbknw&w=1280",
    },
    progress: {
      percentage: 80,
      lastUpdated: "2024-06-18T12:30:00Z",
    },
    comment: {
      uuid: "123e4567-e89b-12d3-a456-426614174011",
      content:
        "O livro é muito bom, a explicação dos algoritmos é clara e objetiva.",
      createdAt: "2024-06-18T12:30:00Z",
    },
    likes: {
      count: 30,
      usersWhoLiked: [
        {
          uuid: "user-7",
          name: "User Seven",
        },
        {
          uuid: "user-8",
          name: "User Eight",
        },
      ],
    },
    readingDetails: {
      description:
        "Você começará com tarefas básicas como a ordenação e a pesquisa, evoluindo para tópicos mais avançados.",
      createdAt: "2024-06-18T12:30:00Z",
    },
  },
  {
    user: {
      uuid: "123e4567-e89b-12d3-a456-426614174012",
      name: "Eduardo Silva",
      avatarUrl: "https://avatars.githubusercontent.com/u/128877022?v=4",
    },
    book: {
      uuid: "123e4567-e89b-12d3-a456-426614174013",
      title: "Entendendo Algoritmos",
      coverUrl:
        "https://books.google.com.br/books/publisher/content?id=HWewDgAAQBAJ&hl=pt-BR&pg=PA4&img=1&zoom=3&bul=1&sig=ACfU3U2GsF3RfSav8pFSCLcT9HKa7Lbknw&w=1280",
    },
    progress: {
      percentage: 55,
      lastUpdated: "2024-06-18T14:00:00Z",
    },
    comment: {
      uuid: "123e4567-e89b-12d3-a456-426614174014",
      content:
        "Gostei muito, mas algumas explicações sobre a teoria de grafos poderiam ser mais simples.",
      createdAt: "2024-06-18T14:00:00Z",
    },
    likes: {
      count: 18,
      usersWhoLiked: [
        {
          uuid: "user-9",
          name: "User Nine",
        },
        {
          uuid: "user-10",
          name: "User Ten",
        },
      ],
    },
    readingDetails: {
      description:
        "A teoria por trás dos algoritmos é bem explicada, com boa cobertura sobre o funcionamento de algoritmos clássicos.",
      createdAt: "2024-06-18T14:00:00Z",
    },
  },
];

export type HomeContainerProps = {
  phrase?: PhraseType;
  isLoadingPhrase: boolean;
};

export function HomeContainer({ phrase, isLoadingPhrase }: HomeContainerProps) {
  return (
    <main className="w-full h-full bg-[#fff] flex gap-10">
      <div className="flex flex-col   gap-2">
        <h2 className="text-blue-700">Para Você</h2>
        <div className="flex flex-col gap-5 overflow-auto  max-h-[80vh] styled-scroll">
          {dataC.map((comment) => (
            <Comment {...comment} />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full items-center pr-10">
        <Phrase
          isLoadingPhrase={isLoadingPhrase}
          author={phrase?.author}
          content={phrase?.content}
        />
      </div>
    </main>
  );
}
