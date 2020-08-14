export class clsLogin {
    SNo: number;
    userId: number;
    userName: string;
    UserMiddleName: string;
    userLastName: string;
    UserPwd: string;
    userEmail: string;
    GroupID: number;
    IsAlive: boolean;
    CreatedDate: Date;
    CreatedBy: number;
    UpdatedDate: Date;
    UpdatedBy: number;

    constructor(SNo: number,
        userId: number,
        userName: string,
        UserMiddleName: string,
        userLastName: string,
        UserPwd: string,
        userEmail: string,
        GroupID: number,
        IsAlive: boolean,
        CreatedDate: Date,
        CreatedBy: number,
        UpdatedDate: Date,
        UpdatedBy: number,

    ) {
        this.SNo = SNo;
        this.userId = userId;
        this.userName = userName;
        this.UserMiddleName = UserMiddleName;
        this.userLastName = userLastName;
        this.UserPwd = UserPwd;
        this.userEmail = userEmail;
        this.GroupID = GroupID;
        this.IsAlive = IsAlive;
        this.CreatedDate = CreatedDate;
        this.CreatedBy = CreatedBy;
        this.UpdatedDate = UpdatedDate;
        this.UpdatedBy = UpdatedBy;
    }
}