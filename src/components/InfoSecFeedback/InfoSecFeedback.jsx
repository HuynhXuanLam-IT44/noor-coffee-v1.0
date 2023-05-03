import React, { useState } from "react";
import { Container, Button } from "../../GlobalStyles";
import {
	InfoSec,
	InfoRow,
	InfoColumn,
	TextWrapper,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
	Form,
	FormLabel,
	FormSelect,
	FormSelectOption,
	FormTextarea,
	FormInput,
	StarsRating,
} from "./InfoSecFeedback.elements";

import { FaStar } from "react-icons/fa";

import { firebase } from "../../lib/firebase";
import { getUUID } from "../../utils";

const InfoSecFeedback = ({
	lightBg,
	imgStart,
	lightText,
	headline,
	lightTextDesc,
	description,
	buttonLabel,
	img,
	alt,
	start,
}) => {
	const [category, setCategory] = useState("");
	const [review, setReview] = useState("");
	const [star, setStar] = useState("");
	const [starReview, setStarReview] = useState("");
	const [descriptionEmail, setDescriptionEmail] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [displayEmail, setDisplayEmail] = useState(false);

	const handleFormSubmit = (event) => {
		event.preventDefault();

		firebase
			.firestore()
			.collection("feedback")
			.add({
				id: getUUID(),
				dateCreate: new Date(),
				star: star,
				category: category,
				review: review,
				emailAddress: emailAddress,
			})
			.then(function () {
				alert("Cảm ơn bạn đã góp ý.");
				window.location = "/";
			})
			.catch(function (error) {
				console.error("Error writing document: ", error);
			});
	};

	const isInvalid = category === "" || review === "" || star === "";

	const ratingChanged = (newRating) => {
		const textDescription = "(*) Hãy cung cấp email để NOOR hỗ trợ bạn tốt hơn";
		const textStarReview = "Bạn cảm thấy điều gì cần thay đổi?";
		setStar(newRating);
		switch (newRating) {
			case 1:
				setDisplayEmail(true);
				setStarReview(textStarReview);
				setDescriptionEmail(textDescription);
				break;
			case 2:
				setDisplayEmail(true);
				setStarReview(textStarReview);
				setDescriptionEmail(textDescription);
				break;
			case 3:
				setDisplayEmail(true);
				setStarReview(textStarReview);
				setDescriptionEmail(textDescription);
				break;
			case 4:
				setDisplayEmail(false);
				setStarReview("Bạn cảm thấy điều gì chưa tốt?");
				break;
			case 5:
				setDisplayEmail(false);
				setStarReview("Tuyệt vời ông mặt trời");
				break;
			default:
				setDisplayEmail(false);
				setStarReview("");
		}
	};

	return (
		<>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<TextWrapper>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
								<Form>
									<StarsRating
										count={5}
										onChange={ratingChanged}
										size={60}
										isHalf={false}
										emptyIcon={<FaStar />}
										fullIcon={<FaStar />}
										activeColor="#ffd700"
									/>
									<Subtitle lightTextDesc={lightTextDesc}>
										{starReview}
									</Subtitle>
									<FormLabel htmlFor="">Danh mục góp ý:</FormLabel>
									<FormSelect
										value={category}
										onChange={({ target }) => setCategory(target.value)}
									>
										<FormSelectOption>Chọn danh mục</FormSelectOption>
										<FormSelectOption>Không gian</FormSelectOption>
										<FormSelectOption>Âm thanh</FormSelectOption>
										<FormSelectOption>Nhân viên</FormSelectOption>
										<FormSelectOption>Đồ uống</FormSelectOption>
										<FormSelectOption>Thức ăn</FormSelectOption>
										<FormSelectOption>Thời gian phục vụ</FormSelectOption>
										<FormSelectOption>Wifi</FormSelectOption>
									</FormSelect>
									<FormLabel htmlFor="">Chia sẻ ý kiến của bạn:</FormLabel>
									<FormTextarea
										type="text"
										value={review}
										onChange={({ target }) => setReview(target.value)}
										rows="4"
									></FormTextarea>
									{displayEmail === true ? (
										<>
											<FormLabel htmlFor="">Email của bạn: (*)</FormLabel>
											<FormInput
												type="email"
												value={emailAddress}
												onChange={({ target }) => setEmailAddress(target.value)}
											/>
										</>
									) : null}
									<Button
										disabled={isInvalid}
										type="submit"
										onClick={handleFormSubmit}
									>
										{buttonLabel}
									</Button>
								</Form>
								{displayEmail === true ? (
									<>
										<Subtitle lightTextDesc={lightTextDesc}>
											{descriptionEmail}
										</Subtitle>
									</>
								) : null}
							</TextWrapper>
						</InfoColumn>
						<InfoColumn>
							<ImgWrapper start={start}>
								<Img src={img} alt={alt} />
							</ImgWrapper>
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
};

export default InfoSecFeedback;
