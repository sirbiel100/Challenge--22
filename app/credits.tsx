import creditStyle from './credits.module.scss'

export default function Credits() {
    return (
        <section className={creditStyle.creditSection}>
            <div className={creditStyle.Loading}></div>
            <div className={creditStyle.creditDiv}>
                <p>Challenged by <a href="https://www.frontendmentor.io/" target='_blank' rel='noreferrer'>Frontendmentor</a>. Coded by <a href="https://gabriel-crispim-portfolio-sirbiel100.vercel.app/" target='_blank' rel='noreferrer'>Crispim.</a>😁</p>
            </div>
        </section>
    );
}