type TPostCard = {
    id: number;
    title: string,
    date: string,
    theme: string,
    text: string;
}

export interface IProps {
    post: TPostCard;
}