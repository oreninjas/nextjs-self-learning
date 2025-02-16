import Page_Design from "@/components/Page_Design";
import connectToDB from "@/lib/db.connect";

export default async () => {
  await connectToDB();
  return <Page_Design />;
};
