import { mdiFacebook, mdiGithub, mdiGmail } from "@mdi/js";
import Icon from "@mdi/react";

const Contact = () => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 bg-gray-900 px-4 py-10 text-neutral-200 md:px-20">
      <div className="flex flex-col items-center text-center">
        <h2 className="mb-6 text-3xl font-bold">
          Souhaitez-vous me contacter?
        </h2>
        <p className="mb-6 max-w-2xl  opacity-80">
          Ce site web a été créé par{" "}
          <span className="font-bold text-green-400">Krimothiazine</span>,
          pharmacien et développeur web. Si vous souhaitez contribuer à
          l'amélioration du contenu de ce site ou discuter, vous pouvez me
          contacter sur les plateformes suivantes.
        </p>
        <div className="flex gap-6 text-green-400 ">
          <a
            href="mailto:krimouv1995@gmail.com"
            className="hover:text-green-600"
          >
            <Icon path={mdiGmail} size={1.5} />
          </a>

          <a
            href="https://github.com/Abdelkrim-Saouchi"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-600"
          >
            <Icon path={mdiGithub} size={1.5} />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100005904095028"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-600"
          >
            <Icon path={mdiFacebook} size={1.5} />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        <h2 className="mb-6 text-3xl font-bold">Rejoignez notre communauté!</h2>
        <p className="mb-6 max-w-2xl leading-relaxed opacity-80">
          Si vous souhaitez contribuer, discuter ou signaler des erreurs sur le
          contenu de ce site, vous pouvez nous rejoindre sur notre groupe
          Facebook.
        </p>
        <a
          href="#"
          className="rounded-md bg-gray-600 px-8 py-2 hover:bg-gray-500"
        >
          Rejoindre
        </a>
      </div>
    </main>
  );
};

export default Contact;
