import React from "react";
import { transformationTypes } from "@/constants";
import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const AddPage = async ({ params: { type } }: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  if (!userId) return redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          creditBalance={user.creditBalance}
          type={transformation.type as TransformationTypeKey}
        />
      </section>
    </>
  );
};

export default AddPage;
