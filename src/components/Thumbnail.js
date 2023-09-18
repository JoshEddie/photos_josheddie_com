
export default function Thumbnail({index, url, title, toggleOverlay}) {

    return (
    <>
        <div className="photos">
            <img
                id = {index}
                src = {url}
                alt = {title}
                className = 'photo'
                onClick={() => toggleOverlay(index)}
            />
        </div>
    </>
    )

}