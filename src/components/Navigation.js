import Link from './Link'

export default function Navigation({thumbnailCategory}) {
    return (
        <>
        <nav className="imageSort">
            <Link 
                category={"Top"}
                keyword={"Featured"}
                thumbnailCategory = {thumbnailCategory}
            />
            <Link 
                category={"Nature"}
                keyword={"Nature"}
                thumbnailCategory = {thumbnailCategory}
            />
            <Link 
                category={"Landscape"}
                keyword={"Landscape"}
                thumbnailCategory = {thumbnailCategory}
            />
            <Link 
                category={"Animals"}
                keyword={"Animals"}
                thumbnailCategory = {thumbnailCategory}
            />
            <Link 
                category={"Black & White"}
                keyword={"Black-&-White"}
                thumbnailCategory = {thumbnailCategory}
            />
            <Link 
                category={"Portraits"}
                keyword={"Portrait"}
                thumbnailCategory = {thumbnailCategory}
            />
            <Link 
                category={"Family & Kids"}
                keyword={"FamilyKids"}
                thumbnailCategory = {thumbnailCategory}
            />
            <Link 
                category={"Cosplay"}
                keyword={"Cosplay"}
                thumbnailCategory = {thumbnailCategory}
            />
        </nav>
        </>
    );
}