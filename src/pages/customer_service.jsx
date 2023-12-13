import React from "react";
import styles from "./customer_service.module.scss";

function CustomerService() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>문의/신청</p>
        <div className={styles.info}>
        <p className={styles.sub_header}>모델하우스 운영시간</p>
        <h3 className={styles.sub_description}>Open 10:00 ~ Close 20:00</h3>
        <p className={styles.sub_header}>유선상담</p>
        <h3 className={styles.sub_description}>Open 08:30 ~ Close 21:00</h3>
        </div>
      </div>
      
      <div className={styles.contents}>
        <div className={styles.left}>
          <p>성함</p>
          <p>연락처</p>
          <p>문의 내용</p>
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <input className={styles.name}></input>
            <input className={styles.phoneNumber}></input>
            <textarea placeholder="문의내용을 입력해주세요"className={styles.description}></textarea>
          </div>
        </div>
      </div>
      <button className={styles.submit_button}>
        문의 등록
      </button>
    </div>
  );
}

export default CustomerService;
