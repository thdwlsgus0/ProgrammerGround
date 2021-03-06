/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import useShow from '@src/hooks/useShow';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';

import { playgroundModalMode } from '@src/store/modules/modal';
import { getOnePlayground } from '@src/lib/axios/playground';
import { getOnePlaygroundItem } from '@src/store/modules/Playground';
import * as StyledComponent from './style';

interface Playground {
	id: number;
	title: string;
	date: string;
	src?: string;
	position: string;
	personnel: string;
	language: string[];
}

const PlaygroundContent = ({
	id,
	title,
	date,
	src,
	position,
	personnel,
	language,
}: Playground) => {
	const [show, dispatch] = useShow();

	const createModalFunc = async (playgroundId: number, event: any) => {
		dispatch(playgroundModalMode());
		const data = await getOnePlayground(playgroundId);
		dispatch(getOnePlaygroundItem(data));
	};
	return (
		<>
			<StyledComponent.PlaygroundContent
				onClick={(e) => createModalFunc(id, e)}
			>
				<StyledComponent.PlaygroundHeader>
					<StyledComponent.PlaygroundTitle>
						{title}
					</StyledComponent.PlaygroundTitle>
					<StyledComponent.PlaygroundDate>
						{date}
					</StyledComponent.PlaygroundDate>
				</StyledComponent.PlaygroundHeader>
				<StyledComponent.PlaygroundImg src={src} />
				<StyledComponent.PlaygroundPersonInfo>
					<span>{position}</span>
					<span>{personnel}</span>
				</StyledComponent.PlaygroundPersonInfo>
				<StyledComponent.PlaygroundTechListContainer>
					{language.map((v, i) => {
						return (
							<StyledComponent.PlaygroundTechList key={i}>
								{v}
							</StyledComponent.PlaygroundTechList>
						);
					})}
				</StyledComponent.PlaygroundTechListContainer>
			</StyledComponent.PlaygroundContent>
		</>
	);
};

export default PlaygroundContent;
