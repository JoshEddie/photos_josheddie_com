
export default function Thumbnail({index, url, title, toggleOverlay}) {

    return (
    <>
        <div className="photos">
            <img
                src = {url}
                alt = {title}
                className = 'photo'
                onClick={() => toggleOverlay(index)}
            />
        </div>
    </>
    )

}