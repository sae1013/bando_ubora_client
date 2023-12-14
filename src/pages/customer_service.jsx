import React from "react";
import styles from "./customer_service.module.scss";
import { useForm } from "react-hook-form";
import { axiosRequest } from "../utils/axios";

function CustomerService() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (inputForm) => {
    const { name, phoneNumber, description } = inputForm;
    const result = await axiosRequest("/cs/register", {
      name,
      phoneNumber,
      description,
    });
    if(!result) {
      window.alert('문의 등록이 실패했습니다.\n1688-6251로 연락 부탁드립니다');
      return
    }
    window.alert('문의가 정상적으로 등록되었습니다.\n확인 후 연락드리겠습니다.\n감사합니다')
  };

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

      <form onSubmit={handleSubmit(onSubmit)} className={styles.contents}>
        <div className={styles.left}>
          <p>성함</p>
          <p>연락처</p>
          <p>문의 내용</p>
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <div>
              <input
                className={styles.name}
                {...register("name", { required: true })}
              ></input>
              {errors.name && (
                <span
                  style={{
                    color: "red",
                    fontSize: "1.2rem",
                    marginLeft: "1rem",
                  }}
                >
                  * 필수 입력값입니다
                </span>
              )}
            </div>
            <div>
              <input
                className={styles.phoneNumber}
                {...register("phoneNumber", { required: true })}
              ></input>
              {errors.phoneNumber && (
                <span
                  style={{
                    color: "red",
                    fontSize: "1.2rem",
                    marginLeft: "1rem",
                  }}
                >
                  * 필수 입력값입니다
                </span>
              )}
            </div>
            <textarea
              placeholder="문의내용을 입력해주세요"
              className={styles.description}
              {...register("description")}
            ></textarea>
          </div>
        </div>
      </form>
      <button
        onClick={handleSubmit(onSubmit)}
        type="submit"
        className={styles.submit_button}
      >
        문의 등록
      </button>
    </div>
  );
}

export default CustomerService;
