import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';

// other modules
import { SystemUsersModule } from '../system-users/system-users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports : [
        SystemUsersModule, 
        PassportModule,
        JwtModule.register({
            secret : "Test",
            signOptions: {expiresIn: '8m'}
        })
    ],
    exports : [JwtStrategy],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
