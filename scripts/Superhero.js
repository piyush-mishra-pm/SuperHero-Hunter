export default class Superhero {
    constructor(id, name, description, imageSrcPath, imageSrcExtension, urlLinks, resourceURI) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageSrcPath = imageSrcPath;
        this.imageSrcExtension = imageSrcExtension;
        this.urlLinks = urlLinks;
        this.resourceURI = resourceURI;
    }

    getImageSrcForImageType(imgType) {
        return `${this.imageSrcPath}/${imgType}.${this.imageSrcExtension}`;
    }
}
