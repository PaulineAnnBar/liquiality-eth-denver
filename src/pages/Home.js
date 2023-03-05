export default function Home() {
  return (
    <div className="align-middle text-center text-banner -mt-12">
      <div className="h-screen flex ">
        <div className="grow space-y-12 self-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-docsGrey-900 md:text-5xl lg:text-6xl dark:text-white">
            DAOTRIBUTOR{" "}
          </h1>
          <a
            href="https://docs.liquality.io/"
            target="_blank"
            rel="noreferrer"
          ></a>
          <p className="mb-3 text-lg font-normal text-docsGrey-500 lg:text-xl sm:px-16 xl:px-48 dark:text-docsGrey-400">
            DAOtributor, a DAO contributor marketplace is a service platform
            that connects DAOs to individual and independent professionals
            across the globe.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="mt-2 flex justify-evenly relative"></div>
        </div>
      </div>
      <div className="flex bg-docsGrey text-white h-screen pt-20 pb-2">
        <div className="grow self-center">
          <h1 className="text-5xl font-extrabold dark:text-docsGrey-900">
            Stress-free blockchain SDK, powered by Liquality
          </h1>
          <p className="mb-6 mt-6 text-lg font-extrabold  font-normal text-docsGrey-500 lg:text-xl sm:px-16 xl:px-48 dark:text-docsGrey-400">
            Put the power of Liquality SDK behind your decentralized application
          </p>
          <div className="flex justify-evenly m-20">
            <div className="p-8">
              <h3 className="text-3xl font-bold dark:text-white mb-2">
                Instant Web3 Wallets
              </h3>
              <p className="mb-3 text-lg font-light text-docsGrey-400 md:text-xl dark:text-docsGrey-400">
                Integrate frictionless wallets with an expanding set of features
                in a matter of minutes. Choose between 10 blockchains.
              </p>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold dark:text-white mb-2">
                Give Your Users Ownership
              </h3>
              <p className="mb-3 text-lg font-light text-docsGrey-400 md:text-xl dark:text-docsGrey-400">
                Increase the value of your game by letting users truly own and
                trade assets and collectibles.
              </p>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold dark:text-purple mb-2">
                Boost Engagement & Revenue
              </h3>
              <p className="mb-3 text-lg font-light text-docsGrey-400 md:text-xl dark:text-docsGrey-400">
                Introduce collectibles and digital assets into your games to
                boost user engagement and grow new revenue streams.
              </p>
            </div>
          </div>
          <h3 className="text-3xl font-bold dark:text-white">
            Connecting your{" "}
            <mark className="px-1 text-docsGrey-900 bg-white rounded dark:bg-docsGrey-900 dark:text-purple">
              web3 app
            </mark>
          </h3>
        </div>
      </div>
      {/* <div className="h-screen">
        <h2>No Token. No DAO. No Bullshit.</h2>
        <p>
          Searching for your new domain shouldn't incur additional charges. We
          believe in empowering users with their Web3 identitiy.
        </p>
      </div> */}
    </div>
  );
}
