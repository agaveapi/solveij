/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

function FileInfo() {
    this.lastModified = undefined
    this.length = undefined
    this.mimeType = undefined
    this.name = undefined
    this.path = undefined
    this.permissions = undefined
    this.system = undefined

    this.type = undefined

}

//Make instanceof work


/**
 *Timestampe of last modified date in ISO8601
 *
 * @return: string
 */
FileInfo.prototype.getLastModified = function () {

    return this.lastModified;
}


FileInfo.prototype.setLastModified= function (value) {
    this.lastModified = value;
}


/**
 *The system level permission for the authenticated user on the system
 *
 * @return: string
 */
FileInfo.prototype.getPermissions = function () {

    return this.permissions;
}


FileInfo.prototype.setPermissions = function (value) {
    this.permissions = value;
}


/**
 *The type of this fileitem: file or dir
 *
 * @return: string
 */
FileInfo.prototype.getType = function () {

    return this.type;
}


FileInfo.prototype.setType = function (value) {
    this.type = value;
}


/**
 *The mimetype of the fileitem
 *
 * @return: string
 */
FileInfo.prototype.getMimeType = function () {

    return this.mimeType;
}


FileInfo.prototype.setMimeType = function (value) {
    this.mimeType = value;
}


/**
 *The id of the system on which this fileitem resides.
 *
 * @return: string
 */
FileInfo.prototype.getSystem = function () {

    return this.system;
}


FileInfo.prototype.setSystem = function (value) {
    this.system = value;
}


/**
 *The path to this fileitem
 *
 * @return: string
 */
FileInfo.prototype.getPath = function () {

    return this.path;
}


FileInfo.prototype.setPath = function (value) {
    this.path = value;
}

/**
 *The length of the fileitem in bytes
 *
 * @return: int
 */
FileInfo.prototype.getLength = function () {

    return this.length;
}


FileInfo.prototype.setLength = function (value) {
    this.length = value;
}


/**
 *The name of the batch queue.
 *
 * @return: string
 */
FileInfo.prototype.getName = function () {

    return this.name;
}


FileInfo.prototype.setName = function (value) {
    this.name = value;
}
     




