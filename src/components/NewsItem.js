import React, { Component } from "react";
import ReactTimeAgo from 'react-time-ago'

export default class NewsItem extends Component {
  async checkIfImageExists(url) {
    try {
      const img = new Image();
      img.src = await url;
      if (img.complete) return true;
    } catch {
      return false;
    }
  }
  render() {
    let { title, description, imageUrl, newsUrl,publishedAt,author,source } = this.props;
    const noImage =
      "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?country=us&ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    if (!this.checkIfImageExists(imageUrl)) imageUrl = noImage;
    return (
      <div className="card shadow-xl rounded w-fit px-2 py-2 my-9 font-ubuntu " style={{position:'relative'}}>
        <div className="badge bg-orange-700 rounded text-white px-3 py-2" style={{position:'absolute',right:-20,top:-7}}>
        {source}
        </div>
        <div className="image w-image py-3 flex justify-center">
          <img className="h-52" src={imageUrl || noImage} alt="" />
        </div>
        <div className="text px-2">
          <h1 className="text-2xl font-semibold my-3 w-image">
            {title ? title.slice(0, 22) : ""} ...
          </h1>
          <p className="w-image my-3">
            {description ? description.slice(0, 42) : 'Taxiarchis Fountas hat D.C. United am Sams'} ...
          </p>
          <span>By <span className=" text-md underline hover:text-blue-700 hover:cursor-pointer">{author?(author.length<20?author:author.slice(0,20)+" ..."):"Unknown"}</span> <ReactTimeAgo date={new Date(publishedAt)} locale="en-US" /> </span>
        </div>
        <div className="link my-3 text-white px-2">
          <a
            href={newsUrl}
            className="btn bg-blue-700 w-12 px-2 py-2 rounded-md"
            target="_blank" rel="noopener noreferrer" >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
