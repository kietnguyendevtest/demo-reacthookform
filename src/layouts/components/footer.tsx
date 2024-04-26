import { useEffect, useState } from "react";

function Footer() {
    const [year, setYear] = useState<string>('2024');

    useEffect(() => {
        const currentYear = new Date().getFullYear().toString() || year;
        setYear(currentYear)
    }, []);

    return (
        <div className="footer-container">
            Bản quyền thuộc <a href="http://kietnm.com" target="_blank" rel="noopener noreferrer">&nbsp;kietnm.com&nbsp;</a> © {year}
        </div>
    );
}

export default Footer;