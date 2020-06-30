import React from "react";
import { Link } from "react-router-dom";
// import format from "date-fns/format";
// import { getTweetId, removeLinks } from "../../utils/index";
// import Button from "./button";
import Avatar from "./avatar";
// import { useRouter } from "next/router";

const Card = (props) => {
	return (
		<>
			{props.tweet ? (
				<>
					<div className="card col mb-5">
						<div>
							<div className="my-2">
								<Avatar
									imageURL={
										props.tweet.user.profile_image_url
									}
									name={props.tweet.user.name}
									screenName={props.tweet.user.screen_name}
								/>
							</div>
							<div>
								<Link>
									<a className="block">
										<h3 className="mt-4 ">
											{props.tweet.full_text}
										</h3>
									</a>
								</Link>
							</div>
						</div>

						{/* <div className="mt-6 sm:flex sm:justify-between sm:items-center">
        <time className="hidden sm:block w-1/3 text-sm leading-5 text-gray-500">
          Tweeted on: {format(new Date(props.created_at), "do MMM yyyy")}
        </time>
        </div> */}
					</div>
				</>
			) : (
				""
			)}
		</>
	);
};

export default Card;
