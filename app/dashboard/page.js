import ButtonAccount from "@/components/ButtonAccount";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import ButtonCheckout from "@/components/ButtonCheckout";
import config from "@/config";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// export default async function Dashboard() {
//   return (
//     <main className="min-h-screen p-8 pb-24">
//       <section className="max-w-xl mx-auto space-y-8">
//         <h1 className="text-3xl md:text-4xl font-extrabold">Private Page</h1>
//       </section>
//     </main>
//   );
// }



export default async function Dashboard() {
  await connectMongo();
  const session = await getServerSession(authOptions);
  const user = await User.findById(session.user.id);

  return (
    <>
      <main className="min-h-screen p-8 pb-24">
        <ButtonAccount />
        <section className="max-w-xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            User Dashboard
          </h1>
          <p>Welcome {user.name} 👋</p>
          <p>Your email is {user.email}</p>
        </section>

        <section className="max-w-xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Subscribe to get access:
          </h1>
          <ButtonCheckout
            mode="subscription"
            priceId={config.stripe.plans[0].priceId}
          />
      </section>
      </main>
    </>
  );
}