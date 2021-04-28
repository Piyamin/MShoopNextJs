import { useRouter } from 'next/router';

import MeetupItemlist from './MeetupItemlist';

function MeetupItem(props) {
  const router = useRouter();

  return (
    <>
      <main>
      <section className="popular-items">
            <div className="container">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                <div className = "row">
                 {props.meetups.map((meetup) => (
                    <MeetupItemlist
                      key={meetup.product_id}
                      id={meetup.product_id}
                      image={meetup.product_img}
                      price={meetup.product_price}
                      name={meetup.product_name}
                      // address={meetup.address}
                    />
                  ))}
                </div>
                </div>
              </div>
            </div>
          </section>
      </main>

    </>
  );
}

export default MeetupItem;
