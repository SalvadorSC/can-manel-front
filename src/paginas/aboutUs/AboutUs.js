import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <>
      <h2 className="title-about-us">Qui som?</h2>
      <hr />
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <p>
            Bio Masia Can Mateu és una masia del segle XVII amb les seves terres
            i boscos al seu voltant que s'ha mantingut amb el temps gràcies a la
            seva activitat agrícola vivint-hi i gestionant-la amb un propòsit
            agrícola i mediambiental en diferents generacions de la mateixa
            família.
          </p>
          <p>
            El projecte sorgeix al 2021 de la voluntat d’un grup de persones de
            fomentar la salut, cuidant les persones, la terra i els éssers vius.
          </p>
          <p>
            A la casa hi vivim diversos nuclis familiars i les persones
            voluntaries que acostumen a venir a través del projecte Europeu
            Erasmus Plus.
          </p>
          <p>
            La gestió de la casa i les terres la porta la cooperativa de treball
            associat Can Mateu que actualment està formada per socis amb
            diferents graus de participació dins del projecte.
          </p>
        </div>
        <div className="col-md-12 col-lg-4">
          <img
            src="https://media.istockphoto.com/photos/masia-in-catalonia-spain-picture-id145154657?b=1&k=6&m=145154657&s=612x612&w=0&h=WaO9ejW95gG1fBP7Ak2m6qAosK3Zd9_u5dHCVs5GNG0="
            className="img-about-us w-100"
            alt="Masia i terreny de Can Mateu"
          />
        </div>
      </div>
    </>
  );
};
