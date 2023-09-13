export default function Link({category, keyword, thumbnailCategory}) {
    return (
        <>
        <button
            className="photoNav"
            onClick={() => thumbnailCategory(keyword)}
        >
            {category}
        </button>
        </>
    );
}