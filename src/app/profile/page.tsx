import options from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserCard from "@/components/UserCard";
import { gql } from "@apollo/client";
import createApolloClient from "@/lib/graphql";
import { Query } from "@/types/graphql";

const userQuery = gql`
	query User {
		user {
			email
			username
			firstName
			lastName
			image
			profile {
				about
				age
				education {
					degreeLevel
					fieldOfStudy
					school
					endDate
					startDate
				}
				employment {
					company
					description
					endDate
					position
					startDate
				}
				occupation
				projects {
					description
					endDate
					link
					name
					startDate
				}
			}
		}
	}
`;

export default async function ServerPage() {
	const session = await getServerSession(options);
	const userData = (
		await createApolloClient().query<Query>({ query: userQuery })
	).data.user;
	// console.log(userData!);

	return (
		<section className="flex flex-row gap-6 h-[80%]">
			<UserCard user={userData!} />
			<div className="w-[1px] h-full py-6">
				<div className="bg-white h-full w-full"></div>
			</div>
		</section>
	);
}
